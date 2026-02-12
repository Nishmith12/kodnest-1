import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
    return (
        <div className="bg-white dark:bg-gray-800 p-8 shadow-sm rounded-lg border">
            <div className="space-y-2 text-center mb-6">
                <h2 className="text-3xl font-bold">Welcome back</h2>
                <p className="text-gray-500">Enter your email to sign in to your account</p>
            </div>
            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">Email</label>
                    <Input id="email" placeholder="m@example.com" required type="email" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="password">Password</label>
                    <Input id="password" required type="password" />
                </div>
                <Button className="w-full" type="submit">Sign In</Button>
            </form>
            <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link className="underline" href="/register">
                    Sign up
                </Link>
            </div>
        </div>
    )
}
