import fs from 'fs';
import path from 'path';

export const parsePropertiesFile = async (filePath: string): Promise<Record<string, string>> => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const result: Record<string, string> = {};
          data.split('\n').forEach((line) => {
            // Ignoruj puste linie i komentarze
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

// export const parsePropertiesFile = async (filePath: string): Promise<Record<string, string>> => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         const result: Record<string, string> = {};
//         data.split('\n').forEach((line) => {
//           // Ignoruj puste linie i komentarze
//           if (line.trim() && !line.startsWith('#')) {
//             const [key, value] = line.split('=');
//             if (key && value) {
//               result[key.trim()] = value.trim();
//             }
//           }
//         });
//         resolve(result);
//       }
//     });
//   });
// };
