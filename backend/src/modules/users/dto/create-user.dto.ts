export class CreateUserDto {
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly passwordHash: string;
    readonly passwordSalt: string;
}
