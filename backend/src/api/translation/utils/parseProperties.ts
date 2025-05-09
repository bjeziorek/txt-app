import fs from 'fs';

export const parsePropertiesFile = async (filePath: string): Promise<Record<string, string>> => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const result: Record<string, string> = {};
          data.split('\n').forEach((line) => {
            if (line.trim() && !line.startsWith('#')) {
              const [key, value] = line.split('=');
              if (key && value) {
                result[key.trim()] = value.trim();
              }
            }
          });
          resolve(result);
        }
      });
    });
  };
