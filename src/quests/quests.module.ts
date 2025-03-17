import { Module, Provider } from "@nestjs/common";

const repositoryProviders: Array<Provider> = [

]

const serviceProviders: Array<Provider> = [

]

@Module({
    providers: [...repositoryProviders, ...serviceProviders]
})
export class QuestsModule {}
