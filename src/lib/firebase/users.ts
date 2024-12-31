import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export interface UserData {
   email: string;
   displayName: string | null;
   photoUrl?: string;
   hasPlus: boolean;
   createdAt: Date;
}

export async function createUserData(
   userId: string,
   userData: Partial<UserData>
) {
   const userRef = doc(db, "users", userId);
   await setDoc(userRef, {
      ...userData,
      displayName: userData.displayName || null,
      hasPlus: false,
      createdAt: new Date(),
   });
}

export async function getUserData(userId: string) {
   const userRef = doc(db, "users", userId);
   const userSnap = await getDoc(userRef);
   return userSnap.data() as UserData | undefined;
}

export async function updateUserProfile(
   userId: string,
   data: Partial<UserData>
) {
   const userRef = doc(db, "users", userId);
   await updateDoc(userRef, data);
}

export async function updateUserPlan(userId: string, hasPlus: boolean) {
   const userRef = doc(db, "users", userId);
   await updateDoc(userRef, { hasPlus });
}
