// src/repositories/diagramRepository.ts
import { BaseRepository } from './baseRepository';

export interface Diagram {
  id?: string; // Optional, if you have an ID field
  nodes: Node[]; // Replace with the appropriate type for nodes
  // edges?: Edge[]; // Optional, if you have edges connecting nodes
}

export class DiagramRepository extends BaseRepository {
  // Method to post a diagram to the API
  async postDiagram(diagram: Diagram): Promise<any> {
    const response = await this.axios.post(`/diagrams`, diagram);
    return response.data;
  }

  // Method to get a diagram by ID
  async getDiagramById(diagramId: string): Promise<Diagram> {
    const response = await this.axios.get<Diagram>(`/diagrams/${diagramId}`);
    return response.data;
  }

  // Method to update a diagram by ID
  async updateDiagram(diagramId: string, diagram: Diagram): Promise<any> {
    const response = await this.axios.put(`/diagrams/${diagramId}`, diagram);
    return response.data;
  }

  // Method to delete a diagram by ID
  async deleteDiagram(diagramId: string): Promise<void> {
    await this.axios.delete(`/diagrams/${diagramId}`);
  }
}
