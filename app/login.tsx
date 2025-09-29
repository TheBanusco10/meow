import Login from "@/features/auth/components/Login";
import GothamSafeContainer from "@/features/shared/components/Gotham/GothamSafeContainer";

export default function LoginScreen() {
  return (
    <GothamSafeContainer>
      <Login />
    </GothamSafeContainer>
  );
}
