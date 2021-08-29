import { promisify } from 'util';
import crypto, { scrypt, createDecipheriv, createCipheriv } from 'crypto';

const promisedScrypt = promisify(scrypt);
const algorithm = 'aes-192-cbc';
const iv = Buffer.alloc(16, 0);
const encryptionKey = process.env.ENCRYPTION_KEY;

const encrypt = text => {
  const ivLength = 16;
  const ivEncrypt = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(process.env.ENCRYPTION_KEY), ivEncrypt);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return ivEncrypt.toString('hex') + ':rn' + encrypted.toString('hex');
};

const decrypt = text => {
  try {
    const textParts = text.split(':rn');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':rn'), 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(encryptionKey), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  } catch (error) {
    return false;
  }
};

async function encryptAES192(text) {
  const key: any = await promisedScrypt(encryptionKey, 'salt', 24);
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

async function decryptAES192(encryptedText) {
  const key: any = await promisedScrypt(encryptionKey, 'salt', 24);
  const decipher = createDecipheriv(algorithm, key, iv);
  decipher.setAutoPadding(false);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

export { decrypt, encrypt, encryptAES192, decryptAES192 };
