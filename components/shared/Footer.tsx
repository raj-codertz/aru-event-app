import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex flex-col flex-between gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/Calendar.gif"
            alt='logo'
            width={58}
            height={28}
            unoptimized
          />
        </Link>
        <p>2024 ARU event. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer