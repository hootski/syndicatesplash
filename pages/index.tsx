/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x6zjLi6vxFV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"


export default function Component() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e] to-[#000000] opacity-90" />
      <header className="relative z-10 flex h-16 items-center justify-between px-6 sm:px-8 md:px-10">
        <Link className="flex items-center" href="#">
          <SkullIcon className="h-6 w-6 text-gray-400" />
          <span className="ml-2 text-lg font-medium text-gray-400">Syndicate</span>
        </Link>
        <nav className="hidden space-x-4 sm:flex">
          {/* <Link className="text-sm font-medium text-gray-400 hover:text-gray-300" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium text-gray-400 hover:text-gray-300" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-400 hover:text-gray-300" href="#">
            Contact
          </Link> */}
        </nav>
        <Button className="hidden sm:inline-flex">
          Join the Syndicate
        </Button>
      </header>
      <main className="relative z-10 flex-1">
        <section className="flex h-[70dvh] flex-col items-center justify-center px-6 sm:px-8 md:px-10">
          <h1 className="text-center text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
            The Syndicate
          </h1>
          <p className="mt-4 max-w-xl text-center text-lg text-gray-400">
            Unleash the Power of Unity. Join The Syndicate and Access High-Stakes Opportunities.
          </p>
          <Button className="mt-8" >
            Join Now
          </Button>
        </section>
        <section className="bg-gray-900 py-16 px-6 sm:px-8 md:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Our Services</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <BriefcaseIcon className="h-8 w-8 text-gray-400" />
                <h3 className="mt-4 text-xl font-bold text-gray-200">Winning Strategy Development</h3>
                <p className="mt-2 text-gray-400">Our team of experts develops strategies to maximize our group's chances of winning, leveraging data analysis and insider knowledge.</p>
              </div>
              <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <ShieldIcon className="h-8 w-8 text-gray-400" />
                <h3 className="mt-4 text-xl font-bold text-gray-200">Group Entry Management</h3>
                <p className="mt-2 text-gray-400">We handle all the logistics of entering high-stakes contests as a group, ensuring each member has an equal chance at winning big.</p>
              </div>
              <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <BoltIcon className="h-8 w-8 text-gray-400" />
                <h3 className="mt-4 text-xl font-bold text-gray-200">Winnings Distribution</h3>
                <p className="mt-2 text-gray-400">When we win, we take care of the fair and transparent distribution of the prize money among all group members, ensuring everyone gets their share.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 py-16 px-6 sm:px-8 md:px-10">
  <div className="mx-auto max-w-7xl">
    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
      What Our Members Say
    </h2>
    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <blockquote className="text-gray-400">
          &quot;Winning with The Syndicate was a life-changing experience! When we hit the $10 million jackpot, 
          the entire process was seamless and professional. The Syndicate&rsquo;s expert management and transparent 
          distribution of the winnings meant that everyone in our group felt like a true winner. 
          Joining The Syndicate was the best decision I ever made.&quot;
        </blockquote>
        <div className="mt-4 flex items-center">
          {/* <Image
            alt="Avatar"
            className="h-10 w-10 rounded-full"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width={40}
          /> */}
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-200">Jane Doe</div>
            <div className="text-sm text-gray-400">CEO, Acme Corp</div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <blockquote className="text-gray-400">
          &quot;The Syndicate&apos;s professionalism and strategic approach set them apart. Their expertise and attention to detail gave me confidence in every step of the process. Being part of The Syndicate isn&rsquo;t just about the thrill of the game; it&rsquo;s about knowing you&rsquo;re in the best possible hands.&quot;
        </blockquote>
        <div className="mt-4 flex items-center">
          {/* <Image
            alt="Avatar"
            className="h-10 w-10 rounded-full"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width={40}
          /> */}
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-200">John Smith</div>
            <div className="text-sm text-gray-400">Founder, Syndicate Solutions</div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <blockquote className="text-gray-400">
          &quot;Joining The Syndicate was an eye-opener. Their smart strategies and professional management make it clear why they&rsquo;re the best in the business. I&rsquo;ve never felt more prepared and supported in any contest. The Syndicate&rsquo;s elite team ensures that every member is part of a winning strategy.&quot;
        </blockquote>
        <div className="mt-4 flex items-center">
          {/* <Image
            alt="Avatar"
            className="h-10 w-10 rounded-full"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width={40}
          /> */}
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-200">Michael Johnson</div>
            <div className="text-sm text-gray-400">COO, Syndicate Enterprises</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="bg-gray-900 py-16 px-6 sm:px-8 md:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Contact Us</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <form className="space-y-4">
                  <div>
                    <Label className="text-gray-400" htmlFor="name">
                      Name
                    </Label>
                    <Input id="name" placeholder="Enter your name" type="text" />
                  </div>
                  <div>
                    <Label className="text-gray-400" htmlFor="email">
                      Email
                    </Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div>
                    <Label className="text-gray-400" htmlFor="message">
                      Message
                    </Label>
                    <Textarea id="message" placeholder="Enter your message" rows={4} />
                  </div>
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
              <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-200">Headquarters</h3>
                    <p className="text-gray-400">123 Syndicate Way, Shadowland, CA 12345</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200">Phone</h3>
                    <p className="text-gray-400">(555) 555-5555</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200">Email</h3>
                    <p className="text-gray-400">info@syndicate.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 bg-gray-900 py-6 px-6 sm:px-8 md:px-10">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center">
            <SkullIcon className="h-6 w-6 text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-400">© 2024 Syndicate. All rights reserved.</span>
          </div>
          <nav className="hidden space-x-4 sm:flex">
            <Link className="text-sm font-medium text-gray-400 hover:text-gray-300" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-gray-300" href="#">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BoltIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function ShieldIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
  
  
}


function SkullIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M8 20v2h8v-2" />
      <path d="m12.5 17-.5-1-.5 1h1z" />
      <path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" />
    </svg>
  )
}