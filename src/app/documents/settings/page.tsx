import DocumentsLayout from "../layout";

interface DocumentSettingsPageProps {
  params: Promise<{
    documentId: string;
  }>;
}

const DocumentSettingsPage = async ({ params }: DocumentSettingsPageProps) => {
  const { documentId } = await params;
  return (
    <DocumentsLayout>
      <p>dasdasds</p>
    </DocumentsLayout>
  );
};

export default DocumentSettingsPage;
