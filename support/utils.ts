import fs from 'fs';

export function updateBulkUserCSVEmailNumbers(csvPath: string, newNumbers: number[]) {
  const csv = fs.readFileSync(csvPath, 'utf-8');
  const lines = csv.split('\n');
  const header = lines[0].split(',');
  const emailIdx = header.findIndex(h => h.trim().toLowerCase() === 'email');
  if (emailIdx === -1) throw new Error('No email column found in CSV');

  let numberIdx = 0;
  const updatedLines = [lines[0]];
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const cols = lines[i].split(',');
    // Replace only the number in the email
    cols[emailIdx] = cols[emailIdx].replace(/_(\d+)@/, `_${newNumbers[numberIdx++]}@`);
    updatedLines.push(cols.join(','));
  }
  fs.writeFileSync(csvPath, updatedLines.join('\n'), 'utf-8');
} 