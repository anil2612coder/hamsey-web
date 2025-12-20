const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Configuration for different campaigns
const campaigns = [
    {
        name: 'offline_poster_01',
        src: 'offline_poster',
        campaign: 'poster_01',
        description: 'General offline poster QR'
    },
    {
        name: 'cafe_poster_01',
        src: 'cafe_poster',
        campaign: 'cafe_01',
        description: 'Cafe placement poster'
    },
    {
        name: 'college_poster_01',
        src: 'college_poster',
        campaign: 'college_01',
        description: 'College campus poster'
    },
    {
        name: 'event_poster_01',
        src: 'event_poster',
        campaign: 'event_01',
        description: 'Event booth poster'
    }
];

const BASE_URL = 'https://hamsey.co/download';

async function generateQRCodes() {
    const outputDir = path.join(__dirname, '../public/qr-codes');

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('🎯 Generating QR codes for Hamsey download campaigns...\n');

    for (const campaign of campaigns) {
        const url = `${BASE_URL}?src=${campaign.src}&campaign=${campaign.campaign}`;
        const fileName = `${campaign.name}.png`;
        const filePath = path.join(outputDir, fileName);

        try {
            await QRCode.toFile(filePath, url, {
                type: 'png',
                width: 500,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#ffffff'
                },
                errorCorrectionLevel: 'H' // High error correction for better scanning
            });

            console.log(`✅ ${campaign.name}`);
            console.log(`   📍 URL: ${url}`);
            console.log(`   📁 File: ${filePath}`);
            console.log(`   📝 ${campaign.description}\n`);
        } catch (err) {
            console.error(`❌ Failed to generate QR for ${campaign.name}:`, err);
        }
    }

    // Also generate a generic QR code
    const genericUrl = `${BASE_URL}?src=qr_code&campaign=generic`;
    const genericPath = path.join(outputDir, 'hamsey_download_qr.png');

    try {
        await QRCode.toFile(genericPath, genericUrl, {
            type: 'png',
            width: 500,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#ffffff'
            },
            errorCorrectionLevel: 'H'
        });

        console.log(`✅ hamsey_download_qr (Generic)`);
        console.log(`   📍 URL: ${genericUrl}`);
        console.log(`   📁 File: ${genericPath}\n`);
    } catch (err) {
        console.error('❌ Failed to generate generic QR:', err);
    }

    console.log('🎉 All QR codes generated successfully!');
    console.log(`📂 Output directory: ${outputDir}`);
}

generateQRCodes();
