const palette = [{
        name: '이 지금',
        length: 182,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Palette')`
    }, {
        name: 'Palette (팔레트)',
        length: 217,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Palette')`
    },
    {
        name: 'Ending scene',
        length: 249,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Palette')`
    },
    {
        name: `Can't Love You Anymore`,
        length: 195,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Palette')`
    },
    {
        name: 'Jam Jam',
        length: 218,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Palette')`
    },
    {
        name: 'Black Out',
        length: 227,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Palette')`
    },
    {
        name: 'Full Stop',
        length: 236,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Palette')`
    },
    {
        name: 'Through The Night',
        length: 253,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Palette')`
    },
    {
        name: 'Love Alone',
        length: 281,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Palette')`
    },
    {
        name: 'Dear Name',
        length: 289,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Palette')`
    },
]








const justRight = [{
        name: `"딱 좋아" (Just Right)`,
        length: 223,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Just Right')`
    },
    {
        name: `"보름달이 뜨기 전에" (Before the Full Moon Rises)`,
        length: 214,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Just Right')`
    },
    {
        name: `"온몸이 반응해" (My Reaction)`,
        length: 221,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Just Right')`
    },
    {
        name: 'Nice',
        length: 185,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Just Right')`
    },
    {
        name: 'Mine',
        length: 239,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Just Right')`
    },
    {
        name: 'Back To Me',
        length: 190,
        album_id: `(SELECT albums.id
    FROM albums
    WHERE albums.name = 'Just Right')`
    }

]



const abbeyRoad = [{
    name: 'Come Together',
    length: 259,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
}, {
    name: 'Something',
    length: 182,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: `Maxwell's Silver Hammer`,
    length: 207,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'Oh! Darling',
    length: 207,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: `Octopu's Garden`,
    length: 171,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'I Want You',
    length: 467,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'Here Comes the Sun',
    length: 185,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'Because',
    length: 105,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'You Never Give Me Your Money',
    length: 243,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'Sun King',
    length: 166,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'Mean Mr. Mustard',
    length: 66,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'Polythene Pam',
    length: 73,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'She Came In Through the Bathroom Window',
    length: 118,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'Golden Slumbers',
    length: 91,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'Carry That Weight',
    length: 96,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'The End',
    length: 125,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},
{
    name: 'Her Majesty',
    length: 23,
    album_id: `(SELECT albums.id
FROM albums
WHERE albums.name = 'Abbey Road')`
},

]



const albumsData = {
    'palette' : palette,
    'justRight' : justRight,
    'abbeyRoad' : abbeyRoad
}

module.exports = albumsData