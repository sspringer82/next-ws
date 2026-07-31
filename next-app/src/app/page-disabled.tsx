
import ListContainer from "@/components/list/list.container";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect('/movies'); // achtung: wirft eine interne Exception (absichtlich)
}
