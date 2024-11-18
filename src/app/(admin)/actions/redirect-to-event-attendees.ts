"use server";

import { redirect } from "next/navigation";

export async function redirectToEventAttendees() {
  redirect(`/dashboard`);
}
