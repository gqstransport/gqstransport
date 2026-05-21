import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'blogs.json');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle OPTIONS request for CORS preflight
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
    return NextResponse.json({ error: 'Failed to read blogs' }, { status: 500, headers: corsHeaders });
  }
}

export async function POST(request: Request) {
  try {
    const newBlog = await request.json();
    let blogs = [];
    if (fs.existsSync(DATA_FILE)) {
      blogs = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
    blogs.push(newBlog);
    fs.writeFileSync(DATA_FILE, JSON.stringify(blogs, null, 2));
    return NextResponse.json({ success: true, blog: newBlog }, { headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500, headers: corsHeaders });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedBlog = await request.json();
    if (!fs.existsSync(DATA_FILE)) return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
    
    let blogs = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const index = blogs.findIndex((b: any) => b.id === updatedBlog.id);
    
    if (index !== -1) {
      blogs[index] = updatedBlog;
      fs.writeFileSync(DATA_FILE, JSON.stringify(blogs, null, 2));
      return NextResponse.json({ success: true, blog: updatedBlog }, { headers: corsHeaders });
    }
    return NextResponse.json({ error: 'Blog not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500, headers: corsHeaders });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!fs.existsSync(DATA_FILE)) return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
    
    let blogs = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    blogs = blogs.filter((b: any) => b.id !== id);
    fs.writeFileSync(DATA_FILE, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json({ success: true }, { headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500, headers: corsHeaders });
  }
}
