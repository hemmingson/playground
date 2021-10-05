import Image from 'next/image'
import Link from 'next/link'

import { Box } from '@/components'

const imageProps = {
  src: 'https://www.github.com/hemmingson.png',
  alt: 'hem',
  height: '150',
  width: '150',
}

const Home = () => (
  <>
    <Box>
      <Link href="https://www.github.com/hemmingson">
        <Image {...imageProps} />
      </Link>
      <Link href="/post">
        <a className="btn">✍🏼</a>
      </Link>
      <Link href="/note">
        <a className="btn">🐛</a>
      </Link>
    </Box>
  </>
)

export default Home
