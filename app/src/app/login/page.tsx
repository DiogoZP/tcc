import { Login } from "@/components/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
            <div className="flex h-6 items-center justify-center rounded-md text-primary-foreground">
              <Image src='/icone.png' alt='logo' width={500} height={500} className="size-14"/>
            </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Login />
          </div>
        </div>
      </div>
      <div className="relative bg-muted">
        <Image
          src="/login-bg.png"
          alt="Image"
          height={961}
          width={1921}
          priority
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
