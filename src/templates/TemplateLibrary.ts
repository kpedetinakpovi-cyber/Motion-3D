import { textAnimationTemplates, shapeAnimationTemplates, transitionTemplates } from './animations';
import {
  textAnimationTemplates as advancedTextTemplates,
  morphShapesTemplates,
  particleTemplates,
  sceneTransitionTemplates,
  lightingTemplates,
  audioVisualizerTemplates,
  cinemaTemplates,
  socialMediaTemplates,
} from './advanced-templates';

export class TemplateLibrary {
  private templates = [
    ...textAnimationTemplates,
    ...shapeAnimationTemplates,
    ...transitionTemplates,
    ...advancedTextTemplates,
    ...morphShapesTemplates,
    ...particleTemplates,
    ...sceneTransitionTemplates,
    ...lightingTemplates,
    ...audioVisualizerTemplates,
    ...cinemaTemplates,
    ...socialMediaTemplates,
  ];

  private favorites: Set<string> = new Set();
  private recent: string[] = [];
  private maxRecent = 20;

  /**
   * Get all templates
   */
  getAll() {
    return this.templates;
  }

  /**
   * Get total count of templates
   */
  getCount() {
    return this.templates.length;
  }

  /**
   * Search templates by keyword (name, category, tags)
   */
  search(query: string) {
    const q = query.toLowerCase();
    return this.templates.filter(
      t =>
        t.name.toLowerCase().includes(q) ||
        (t.category && t.category.toLowerCase().includes(q)) ||
        (t.tags && t.tags.some(tag => tag.toLowerCase().includes(q)))
    );
  }

  /**
   * Get templates by category
   */
  getByCategory(category: string) {
    return this.templates.filter(t => t.category === category);
  }

  /**
   * Get all unique categories
   */
  getCategories() {
    const cats = new Set<string>();
    this.templates.forEach(t => {
      if (t.category) cats.add(t.category);
    });
    return Array.from(cats).sort();
  }

  /**
   * Mark template as favorite
   */
  addFavorite(templateId: string) {
    this.favorites.add(templateId);
  }

  /**
   * Remove template from favorites
   */
  removeFavorite(templateId: string) {
    this.favorites.delete(templateId);
  }

  /**
   * Get favorite templates
   */
  getFavorites() {
    return this.templates.filter(t => this.favorites.has(t.id));
  }

  /**
   * Add to recently used
   */
  addRecent(templateId: string) {
    this.recent = [templateId, ...this.recent.filter(id => id !== templateId)].slice(0, this.maxRecent);
  }

  /**
   * Get recently used templates
   */
  getRecent() {
    return this.recent.map(id => this.templates.find(t => t.id === id)).filter(Boolean);
  }

  /**
   * Get template by ID
   */
  getById(id: string) {
    return this.templates.find(t => t.id === id);
  }

  /**
   * Get trending templates (most used)
   */
  getTrending() {
    // Placeholder: would track usage stats
    return this.templates.slice(0, 10);
  }

  /**
   * Get recommendations based on current template
   */
  getRecommendations(templateId: string, limit = 5) {
    const template = this.getById(templateId);
    if (!template) return [];

    return this.templates
      .filter(
        t =>
          t.id !== templateId && t.category === template.category
      )
      .slice(0, limit);
  }
}

export const templateLibrary = new TemplateLibrary();
