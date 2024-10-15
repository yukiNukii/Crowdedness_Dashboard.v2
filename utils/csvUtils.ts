import Papa from 'papaparse';

export function parseCSV(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (results) => {
        resolve(results.data as any[]);
      },
      header: true,
      error: (error) => {
        reject(error);
      },
    });
  });
}