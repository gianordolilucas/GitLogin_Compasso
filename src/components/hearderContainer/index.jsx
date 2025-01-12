import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import {
    HeadLogout,
    ButtonLogout,
    ButtonSave,
    ButtonBack,
    Name,
    Title
} from './styles'


import { FiLogOut, FiSave, FiArrowLeft } from 'react-icons/fi';
import { context } from '../../context'

const HearderContainer = props => {

    const ctx = useContext(context);

    const history = useHistory();
    const handleOnclick = route => history.push(route);

    async function cleanContex() {

        try {

            ctx.setUserDataFollow();
            ctx.setReposFollow();
            ctx.setFollowersFollow();
            ctx.setFollowingsFollow();
            ctx.setStarredsFollow();
            ctx.setUserData();
            ctx.setRepos();
            ctx.setFollowers();
            ctx.setFollowings();
            ctx.setStarreds();

            handleOnclick('/')

        } catch (err) {
            console.log(err)
        }
    }

    /*Para nao ter que realizar nova consulta, aqui eu passo os dados do usuario selecionado 
    para o usuario principal*/
    async function updateContex() {

        try {
            ctx.setUserDataFollow();
            ctx.setReposFollow();
            ctx.setFollowersFollow();
            ctx.setFollowingsFollow();
            ctx.setStarredsFollow();
            ctx.setUserData(ctx.userDataFollow);
            ctx.setRepos(ctx.reposFollow);
            ctx.setFollowers(ctx.followersFollow);
            ctx.setFollowings(ctx.followingsFollow);
            ctx.setStarreds(ctx.starredsFollow)

        } catch (err) {
            console.log(err)
        }

        console.log(ctx)
        handleOnclick('/')
    }

    async function backHome() {

        try {

            ctx.setUserDataFollow();
            ctx.setReposFollow();
            ctx.setFollowersFollow();
            ctx.setFollowingsFollow();
            ctx.setStarredsFollow();
            ctx.setStarredsFollow();
            handleOnclick('/')

        } catch (err) {
            console.log(err)
        }
    }



    return (
        <HeadLogout>
            {props?.userFollow ? /* Quando um usuario é selecionado da lista de seguidores ou seguindo */
                <React.Fragment>
                    <ButtonBack onClick={() => backHome()}><FiArrowLeft />Inicio</ButtonBack>
                    <ButtonSave onClick={() => updateContex()}><FiSave /> Salvar </ButtonSave>
                </React.Fragment>

                : props?.number ? /* Quando é o header para uma lista de repos, seguidores, seguindo ou favoritos */

                    <React.Fragment>
                        <ButtonBack onClick={() => backHome()}><FiArrowLeft />Inicio</ButtonBack>
                        <Title>{props?.number} {props?.text}</Title>
                    </React.Fragment>

                    :  /* Quando esta na Home */
                    <React.Fragment>
                        <Name>#{ctx.userData?.login}</Name>
                        <ButtonLogout onClick={() => cleanContex()}><FiLogOut /> Sair </ButtonLogout>
                    </React.Fragment>
            }
        </HeadLogout>


    );
}
export default HearderContainer