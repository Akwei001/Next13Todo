import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <Link href='/new'> New </Link>
        <ul></ul>
      </header>
    </>
  );
}
