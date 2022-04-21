import axios from 'axios';

const gamesActions = {
    
    fetchGames: () =>{
        return async(dispatch, getState) => {
            
            const res = await axios.get('https://game-over-shop.herokuapp.com/api/games')
            
            dispatch({type:'fetchGames', payload:res.data.response})
    }
},

    fetchGame: (id) =>{
    return async(dispatch, getState) => {

    const res = await axios.get(`https://game-over-shop.herokuapp.com/api/games/${id}`)

    dispatch({type:'fetchOne', payload:res.data.response})

    }
},


    deleteGame: (id)=>{
        return async(dispatch, getState) => {
            try {
            
                const res = await axios.delete(`https://game-over-shop.herokuapp.com/api/games/${id}`)

            } catch(err){
                console.log(err)
            }
        }
    },

    filterGames: (games, value, genre)=>{
        return async(dispatch,getState)=>{
		dispatch({type:'filterGames', payload:{games, value, genre}})

        }
    },

    setGame: (gameName, genre, src, size, workson, company, description, requirements, price, images)=>{
        return async(dispatch, getState)=>{

		const res = await axios.post('https://game-over-shop.herokuapp.com/api/games',{gameName, genre, src, size, workson, company, description, requirements, price, images})

        }
    },

    addToShop: (game) => {
	    return async(dispatch, getState) => {
		    dispatch({type:'addToShop', payload:{game}})
	    }
    },

    deleteFromShop: (game) => {
	    return async(dispatch, getState) => {
		    dispatch({type:'deleteFromShop', payload:{game}})
	    }
    },
}

export default gamesActions;