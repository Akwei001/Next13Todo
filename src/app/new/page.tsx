import { prisma } from '@/db';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function createTodo(data: FormData) {
  'use server';

  const title = data.get('title')?.valueOf();
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid title');
  }

  await prisma.todo.create({ data: { title, complete: false } });

  redirect('/');
}

export default function Page() {
  return (
    <>
      <header className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl'>New</h1>
      </header>
      <form action={createTodo} className='flex flex-col gap-2'>
        <input
          type='text'
          name='title'
          className='px-2 py-1 bg-transparent border rounded outline-none border-slate-300 focus-within:border-slate-100'
        />
        <div className='flex justify-end gap-1'>
          <Link
            href='..'
            className='px-2 py-1 border rounded outline-none border-slate-300 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700'
          >
            Cancel
          </Link>
          <button
            type='submit'
            className='px-2 py-1 border rounded outline-none border-slate-300 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700'
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
