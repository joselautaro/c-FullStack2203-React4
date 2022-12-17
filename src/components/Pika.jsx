import React, { useState, useEffect } from 'react'
import './pika.css'

const Pika = () => {

    const [pokemon, setPokemon] = useState(null)

    const [id, setId] = useState(1)

    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        setPokemon(null)
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default
                })
            })
    }, [id])

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }
    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (busqueda.length > 2) {
            setPokemon(null)
            fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
                .then((res) => res.json())
                .then((data) => {
                    setPokemon({
                        nombre: data.name,
                        img: data.sprites.front_default
                    })
                    setId(
                        data.id
                    )
                })
        }

    }



    return (
        <div>

            <h2>Pokemon</h2>
            {
                !pokemon ? <h3>Cargando...</h3> :
                    <>
                        <h3>{pokemon.numero}</h3>
                        <h3>{pokemon.nombre}</h3>
                        <img className="img" src={pokemon.img} alt={pokemon.nombre} />
                    </>
            }
            <div>
                <button className="btn btn-primary" onClick={handleAnterior}> Anterior </button>
                <button className="btn btn-success" onClick={handleSiguiente}> Siguiente </button>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        value={busqueda}
                        onChange={handleInputChange}
                    />
                </form>
            </div>
        </div>
    )
}

export default Pika