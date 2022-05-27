export class User {

    constructor(
        public id: string = null,
        public name: string,
        public email: string,
        public password: string) { }

}


/*import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

}*/