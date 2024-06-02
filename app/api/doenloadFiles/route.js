import { NextResponse } from 'next/server'
import fs from 'fs'
import * as path from 'path'

export async function GET() {
    const response = await fetch('http://localhost:3000/out-0.png', {
        cache: 'no-store',
    })

    // NextResponse.setHeader('Content-Disposition', 'attachment; filename=filename.txt');
    // NextResponse.setHeader('Content-Type', 'application/text');
    // // console.log({ gh: req.nextUrl.searchParams.get('name') });
    // const filePath = path.join(process.cwd(), 'public', 'file.txt');
    // const fileStream = fs.createReadStream(filePath);

    // fileStream.pipe(response);

    // response.on('finish', () => {
    //     fileStream.close();
    // });
    return new Response(response.body, {
        headers: {
            ...response.headers, // copy the previous headers
            'Content-Disposition': 'attachment;',
            'Content-Type': 'image/png',
        },
    })
}
