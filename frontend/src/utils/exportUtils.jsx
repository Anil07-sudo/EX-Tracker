import * as XLSX from "xlsx";

export const exportToExcel = (data, fileName = "transactions") => {
  if (!data || data.length === 0) {
    alert("No data to export!");
    return;
  }

  try {
    // Convert JSON to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create workbook
    const workbook = XLSX.utils.book_new();

    // Append worksheet
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Download Excel file
    XLSX.writeFile(workbook, `${fileName}.xlsx`,{
        bookType : 'xlsx',
        type :'array'
    });

  } catch (error) {
    console.error("Export failed:", error);
    alert("Error exporting dat,please try again.")
  }
};