import HeaderAfterLogin from "@/components/HeaderAfterLogin";
import DetailSection from "./DetailSection";

export default async function DetailPage({ params }) {
  const { id } = await params;

  return (
    <>
      <HeaderAfterLogin />
      <DetailSection id={id} />;
    </>
  );
}
