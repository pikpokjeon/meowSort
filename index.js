const genRandomNumInRange = ( min, max ) => Math.round( Math.random() * max ) + min

const random = toSort =>
{
    const cubes = [...( Array.isArray( toSort ) ? toSort : Object.values( toSort ) ).flatMap( f => f )]
    const _cubes = [...cubes]
    const que = cubes.reduce( ( box, _, i ) =>
    {
        while ( 1 )
        {
            const idx = genRandomNumInRange( 0, _cubes.length )
            if ( _cubes[idx] )
            {
                box[i] = _cubes[idx], delete ( _cubes[idx] )
                break
            }
            continue
        }
        return box
    }, [] )
    console.log( que )
    return que
}

const meowSort = {random}

export {meowSort}