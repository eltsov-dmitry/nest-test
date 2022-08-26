import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { UsersService } from '../users/users.service';
import { not, toBool } from '../../libs/helpers';
import { MessageException } from '../../exceptions/message.exception';
import { messages } from '../../libs/messages';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    private readonly usersService: UsersService,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const user = await this.usersService.findOneById(createProjectDto.user_id);
    const project = await this.projectRepository.save({
      ...createProjectDto,
      user,
    });
    return this.findOne(project.id);
  }

  async findAll() {
    return this.projectRepository.find();
  }

  async findOne(id: number) {
    const project = await this.projectRepository.findOne({
      where: { id },
    });
    if (not(toBool(project))) {
      throw new MessageException(messages.ProjectNotFound);
    }
    return project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne(id);
    return this.projectRepository.save({ ...project, ...updateProjectDto });
  }

  async remove(id: number) {
    const project = await this.projectRepository.findOneBy({ id });
    await this.projectRepository.remove(project);
    return this.findAll();
  }
}
