import Link from 'next/link';
import { PostMetadata } from "./PostMetadata";

import { Card, CardHeader } from './ui/card';

export default function PostPreview (props: PostMetadata) {
  return (
    <Card className='border p-4 rounded-md shadow-sm min-h-[106px] bg-card'>
      <div className='flex pb-2'>
        <p className='pr-3 text-xs text-slate-300'>{props.date}</p>
        <p className='text-xs'>{props.category}</p>
      </div>
      <Link href={`/posts/${props.slug}`}>
        <h2 className='font-bold hover:underline'>{props.title}</h2>
      </Link>
    </Card>
  )
}