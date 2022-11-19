const genRandomNumInRange = ( min, max ) => Math.round( Math.random() * max ) + min

const random = toSort =>
{
    const cubes = [...( Array.isArray( toSort ) ? toSort : Object.values( toSort ) )]
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
    return que
}

const meowSort = {random}

// let a = meowSort.random( [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11], 13], 14 )
// a = meowSort.random( { 1: 'A', 2: 'B', 3: ['C', 'D'], 4: 'E' } )
// console.log( a )

export {meowSort}
