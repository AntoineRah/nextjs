// pages/taskdetails.js

import { GetServerSideProps } from 'next';
import Image from 'next/image';

interface TaskDetails {
    title: string;
    image_url: string;
}

interface TaskDetailsProps {
    taskDetails: TaskDetails;
}

export default function TaskDetailsPage({ taskDetails }: TaskDetailsProps) {
    const { title, image_url } = taskDetails;

    return (
        <div>
            <h1>{title}</h1>
            <Image
                src={image_url}
                alt={title}
                width={300}
                height={200}
                loader={({ src }) => src}
            />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<TaskDetailsProps> = async () => {
    const response = await fetch('https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874');
    const data: TaskDetails = await response.json();

    return {
        props: {
            taskDetails: data
        }
    };
}
