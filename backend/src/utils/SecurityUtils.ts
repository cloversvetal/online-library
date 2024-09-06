import * as crypto from 'crypto';

export function hashPassword(password: string): string {
    return crypto.createHash('sha1').update(password).digest('hex');
}

export function verifyPassword(inputPassword: string, masterKey: string): boolean {
    const hashedInput = hashPassword(inputPassword);
    return hashedInput === masterKey;
}
