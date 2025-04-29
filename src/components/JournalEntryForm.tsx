
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, Save } from "lucide-react";

export type JournalEntry = {
  id: number;
  title: string;
  date: string;
  content: string;
  mood: string;
  tags: string[];
};

interface JournalEntryFormProps {
  onSave: (entry: JournalEntry) => void;
  onCancel: () => void;
  initialEntry?: JournalEntry;
  isEditing?: boolean;
}

const JournalEntryForm: React.FC<JournalEntryFormProps> = ({
  onSave,
  onCancel,
  initialEntry,
  isEditing = false
}) => {
  const { toast } = useToast();
  const [title, setTitle] = useState(initialEntry?.title || "");
  const [content, setContent] = useState(initialEntry?.content || "");
  const [mood, setMood] = useState(initialEntry?.mood || "");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>(initialEntry?.tags || []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !mood.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    const entry: JournalEntry = {
      id: initialEntry?.id || Date.now(),
      title,
      date: initialEntry?.date || new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      content,
      mood,
      tags
    };
    
    onSave(entry);
    
    toast({
      title: isEditing ? "Entry Updated" : "Entry Added",
      description: isEditing 
        ? "Your journal entry has been updated successfully" 
        : "Your journal entry has been added successfully",
    });
  };

  const handleAddTag = () => {
    const trimmedTag = tagInput.trim().toLowerCase().replace(/\s+/g, '-');
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
      setTagInput("");
    }
  };
  
  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };
  
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Give your entry a title"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">Reflection</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts, feelings, and observations..."
          className="min-h-[150px]"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="mood">How are you feeling today?</Label>
        <Input
          id="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="e.g., Balanced, Energetic, Calm, Sluggish"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="tags">Tags</Label>
        <div className="flex gap-2">
          <Input
            id="tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="Add tags and press Enter"
          />
          <Button 
            type="button"
            onClick={handleAddTag}
            variant="outline"
          >
            Add
          </Button>
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-ayurveda-lavender/20 text-ayurveda-deepPurple text-xs rounded-full flex items-center gap-1"
              >
                {tag}
                <button 
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-ayurveda-deepPurple/70 hover:text-ayurveda-deepPurple"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex justify-end gap-2 pt-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white"
        >
          <Save size={16} className="mr-2" />
          {isEditing ? "Update Entry" : "Save Entry"}
        </Button>
      </div>
    </form>
  );
};

export default JournalEntryForm;
