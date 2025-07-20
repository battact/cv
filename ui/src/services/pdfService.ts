export interface PDFServiceInterface {
    printCurrentPage(): Promise<void>;
}

export const pdfService = (): PDFServiceInterface => {
    /**
     * Triggers the browser's print dialog for the current page
     * Note: Button visibility is managed by React component state
     */
    const printCurrentPage = async (): Promise<void> => {
        try {
            // Trigger print dialog
            window.print();
        } catch (error) {
            console.error('Error printing page:', error);
            throw new Error('Failed to print page. Please try again.');
        }
    };

    return {
        printCurrentPage,
    };
};
