import favSvg from '@/assets/fav.svg';
import { AddToFavButton, FavIcon } from '@/components/CardArt/styled';
import { alreadyInFavs } from '@/functions';
import { FavArt } from '@/interfaces/FavInterfaces';
import { useAppDispatch } from '@/store/hooks';
import { currArt } from '@/store/selectors/currentArtSelectors';
import { favArts } from '@/store/selectors/favArtsSelectors';
import { addToFav, deleteFromFav } from '@/store/slices/favArtsSlice';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import {
    AddToFavButtonAbsolutePos,
    ArtistDate,
    ArtistName,
    CurrentArtImage,
    CurrentArtPage,
    Description,
    ImageWithButton,
    Info,
    TitleInfo,
    TitleWrapper,
    WrapperArtInfo,
    WrapperArtistInfo,
} from './styled';
export const ArtPage: FC = () => {
    const favs = useSelector(favArts);
    const currentArt = useSelector(currArt);
    const [isFav, setIsFav] = useState(
        currentArt && alreadyInFavs(currentArt.id, favs)
    );
    const dispatch = useAppDispatch();
    const toggleFavHandler = () => {
        setIsFav((prev) => !prev);
        if (isFav && currentArt.id) {
            localStorage.removeItem(String(currentArt.id));
            dispatch(deleteFromFav(currentArt.id));
        } else {
            localStorage.setItem(
                String(currentArt.id),
                JSON.stringify({ ...currentArt, isFav: !isFav })
            );
            const favArt: FavArt = {
                ...currentArt,
                isFav: !isFav,
            };
            dispatch(addToFav(favArt));
        }
    };
    return (
        <CurrentArtPage>
            <ImageWithButton>
                <CurrentArtImage src={currentArt?.imgSrc} alt="image of art" />
                <AddToFavButtonAbsolutePos
                    $is_active={alreadyInFavs(currentArt?.id, favs)}
                >
                    <AddToFavButton
                        onClick={toggleFavHandler}
                        $is_active={isFav ?? false}
                    >
                        <FavIcon src={favSvg} alt="toggle fav" />
                    </AddToFavButton>
                </AddToFavButtonAbsolutePos>
            </ImageWithButton>
            <Info>
                <WrapperArtInfo>
                    <TitleWrapper>
                        <TitleInfo>{currentArt?.title}</TitleInfo>
                    </TitleWrapper>
                    <ArtistName>
                        {currentArt?.artist ? currentArt.artist : 'Unknown'}
                    </ArtistName>
                    <ArtistDate>{currentArt?.date}</ArtistDate>
                </WrapperArtInfo>
                <WrapperArtistInfo>
                    <TitleWrapper>
                        <TitleInfo>Overview</TitleInfo>
                    </TitleWrapper>
                    <Description>
                        <span>Artist nacionality: </span>
                        {currentArt?.country}
                    </Description>
                    <Description>
                        <span>Dimensions: Sheet: </span>
                        {currentArt?.dimensions}
                    </Description>
                    <Description>
                        <span>Credit Line: </span>
                        {currentArt?.criditeLine}
                    </Description>
                    <Description>
                        <span>Repository: </span>
                        {currentArt?.repository}
                    </Description>
                    <Description>
                        {currentArt?.access ? 'Public' : 'Private'}
                    </Description>
                </WrapperArtistInfo>
            </Info>
        </CurrentArtPage>
    );
};
