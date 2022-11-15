import { ClientsEntity } from "../../entities/users/client.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapter/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

class ListClientUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository) {}

    async execute(): Promise<ClientsEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListClientUseCase(
    ClientsRepository
);