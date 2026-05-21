import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

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
    return NextResponse.json({ error: 'Failed to read projects' }, { status: 500, headers: corsHeaders });
  }
}

export async function POST(request: Request) {
  try {
    const newProject = await request.json();
    let projects = [];
    if (fs.existsSync(DATA_FILE)) {
      projects = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
    projects.push(newProject);
    fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2));
    return NextResponse.json({ success: true, project: newProject }, { headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500, headers: corsHeaders });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedProject = await request.json();
    if (!fs.existsSync(DATA_FILE)) return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
    
    let projects = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const index = projects.findIndex((p: any) => p.id === updatedProject.id);
    
    if (index !== -1) {
      projects[index] = updatedProject;
      fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2));
      return NextResponse.json({ success: true, project: updatedProject }, { headers: corsHeaders });
    }
    return NextResponse.json({ error: 'Project not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500, headers: corsHeaders });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!fs.existsSync(DATA_FILE)) return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders });
    
    let projects = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    projects = projects.filter((p: any) => p.id !== id);
    fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2));
    
    return NextResponse.json({ success: true }, { headers: corsHeaders });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500, headers: corsHeaders });
  }
}
