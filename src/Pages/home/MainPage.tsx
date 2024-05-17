import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Gallery } from '@/components/Gallery';
import { AnotherGallery } from '@/components/OtherWorksGallery';
import { SearhForm } from '@/components/SearchForm';
import { SearchResults } from '@/components/SearchResults';
import { Title } from '@/components/Title';
import { Topic } from '@/components/YoursTopic';
import { FC } from 'react';

export const MainPage: FC = () => {
    return (
        <>
            <Title />
            <SearhForm />
            <ErrorBoundary>
                <SearchResults />
            </ErrorBoundary>
            <Topic hText="Our special gallery" spanText="Topics for you" />
            <Gallery />
            <Topic hText="Other works for you" spanText="Here some more" />
            <AnotherGallery />
        </>
    );
};
