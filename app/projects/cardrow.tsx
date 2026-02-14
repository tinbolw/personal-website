// TODO add enum status type
import { Suspense } from 'react';
import Card from './card';
import { status } from './enums';
import { neon } from '@neondatabase/serverless';
export const dynamic = 'force-dynamic';
async function getData(status:status) {
  const sql = neon(process.env.DATABASE_URL);
  const response = sql`SELECT * FROM projects WHERE status = ${status};`;
  return response;
}

interface Props {
  status: status;
}

export default async function CardRow({status}:Props) {
  return (
    <div className="flex flex-row gap-2">
        {
          (await getData(status)).map(entry =>
            <Card key={entry.id} title={entry.title} about={entry.about} tags={entry.tags}></Card>
          )
        }
    </div>
  )
}