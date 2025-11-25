export const exportToCSV = (data, filename = 'students.csv') => {
  if (!data.length) return;

  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => 
      headers.map(header => 
        `"${(row[header] || '').toString().replace(/"/g, '""')}"`
      ).join(',')
    )
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const exportToPDF = (studentData) => {
  // Placeholder for PDF export functionality
  // In a real implementation, you would use a library like jsPDF
  console.log('Exporting to PDF:', studentData);
  alert('PDF export would be implemented with a library like jsPDF');
};