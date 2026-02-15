import { neon } from '@neondatabase/serverless';
import Tag from '../_components/tag';
import StyledLink from '@/app/_components/styledlink';

export const dynamic = 'force-dynamic';

async function getProject(id: number) {
    const sql = neon(process.env.DATABASE_URL as string);
    const response = sql`SELECT * FROM projects WHERE id = ${id}`;
    return response;
}

export default async function Home({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Page id={Number((await params).id)} />
    )
}

async function Page({ id }: { id: number }) {
    if (isNaN(id)) {
        return (
            <div>
                Invalid project ID.
            </div>
        )
    } else {
        const projects = await getProject(id);
        if (projects[0] === undefined) {
            return (
                <div>
                    Not Found.
                </div>
            )
        } else {
            const project = projects[0];
            const parsedTags = project.tags?.substring(1, project.tags?.length - 1).split(",");
            return (
                <div className="flex flex-col items-center justify-center gap-1">
                    <h1 className="text-3xl">{project.title}</h1>
                    <div className="text-xl">
                        {project.about}
                    </div>
                    <div className="flex flex-row gap-1">
                        <Tag text={project.status}></Tag>
                        <div className="flex flex-row gap-1">
                            {
                                parsedTags?.map((tag: string) =>
                                    <Tag key={tag} text={tag}></Tag>
                                )
                            }
                        </div>
                    </div>
                    <div className="bg-zinc-700 p-2 rounded-lg flex-grow">
                        {project.description}
                    </div>
                    <StyledLink href="/projects" label="Back"/>
                </div>
            )
        }
    }
}