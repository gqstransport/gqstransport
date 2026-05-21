import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'services.json');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json([], { headers: corsHeaders });
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return NextResponse.json(JSON.parse(data), { headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read services' }, { status: 500, headers: corsHeaders });
  }
}

export async function POST(request: Request) {
  try {
    const newService = await request.json();
    let services = [];
    if (fs.existsSync(DATA_FILE)) {
      services = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
    services.push(newService);
    fs.writeFileSync(DATA_FILE, JSON.stringify(services, null, 2));
    return NextResponse.json({ success: true, service: newService }, { headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500, headers: corsHeaders });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedService = await request.json();
    if (!fs.existsSync(DATA_FILE)) return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
    
    let services = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const index = services.findIndex((s: any) => s.id === updatedService.id);
    
    if (index !== -1) {
      services[index] = updatedService;
      fs.writeFileSync(DATA_FILE, JSON.stringify(services, null, 2));
      return NextResponse.json({ success: true, service: updatedService }, { headers: corsHeaders });
    }
    return NextResponse.json({ error: 'Service not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500, headers: corsHeaders });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!fs.existsSync(DATA_FILE)) return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
    
    let services = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    services = services.filter((s: any) => s.id !== id);
    fs.writeFileSync(DATA_FILE, JSON.stringify(services, null, 2));
    
    return NextResponse.json({ success: true }, { headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500, headers: corsHeaders });
  }
}
