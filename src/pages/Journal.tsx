
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, BookOpen, Plus, Edit, Trash, X } from "lucide-react";
import JournalEntryForm, { JournalEntry } from "@/components/JournalEntryForm";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const Journal = () => {
  const { toast } = useToast();
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      title: "Morning Routine Reflection",
      date: "April 28, 2025",
      content: "Today I started with oil pulling and tongue scraping. I noticed my energy was balanced after my morning meditation.",
      mood: "Balanced",
      tags: ["morning-routine", "meditation"]
    },
    {
      id: 2,
      title: "Afternoon Energy Dip",
      date: "April 26, 2025",
      content: "Experienced low energy around 3pm. Applied some of the Pitta-balancing techniques - took a short walk and had cooling cucumber water.",
      mood: "Recovering",
      tags: ["pitta-imbalance", "remedies"]
    },
    {
      id: 3,
      title: "Evening Wind Down",
      date: "April 23, 2025",
      content: "Used the lavender and sesame oil blend for self-massage before shower. Sleep came easily and was restful.",
      mood: "Calm",
      tags: ["evening-routine", "self-care"]
    }
  ]);
  
  const [currentEntry, setCurrentEntry] = useState<JournalEntry | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState<number | null>(null);
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null);

  // Handle saving a new or edited entry
  const handleSaveEntry = (entry: JournalEntry) => {
    if (isEditing) {
      setEntries(entries.map(e => e.id === entry.id ? entry : e));
    } else {
      setEntries([entry, ...entries]);
    }
    
    setShowEntryForm(false);
    setIsEditing(false);
    setCurrentEntry(null);
  };

  // Initialize entry editing
  const handleEditEntry = (entry: JournalEntry) => {
    setCurrentEntry(entry);
    setIsEditing(true);
    setShowEntryForm(true);
  };

  // Open delete confirmation dialog
  const confirmDelete = (id: number) => {
    setEntryToDelete(id);
    setDeleteConfirmOpen(true);
  };

  // Delete entry after confirmation
  const handleDeleteEntry = () => {
    if (entryToDelete) {
      setEntries(entries.filter(entry => entry.id !== entryToDelete));
      toast({
        title: "Entry Deleted",
        description: "Your journal entry has been deleted successfully"
      });
      setDeleteConfirmOpen(false);
      setEntryToDelete(null);
    }
  };

  // Toggle entry details expansion
  const toggleEntryDetails = (id: number) => {
    setExpandedEntry(expandedEntry === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-medium text-ayurveda-deepPurple">Your Ayurvedic Journal</h1>
            <p className="text-gray-600 mt-1">
              Track your daily reflections, symptoms, and balance
            </p>
          </div>
          <Button 
            className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white flex items-center gap-2"
            onClick={() => {
              setShowEntryForm(true);
              setIsEditing(false);
              setCurrentEntry(null);
            }}
          >
            <Plus size={16} />
            New Entry
          </Button>
        </div>

        {showEntryForm ? (
          <div className="ayurveda-card p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-serif text-ayurveda-deepPurple">
                {isEditing ? "Edit Journal Entry" : "Create New Entry"}
              </h2>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setShowEntryForm(false);
                  setIsEditing(false);
                  setCurrentEntry(null);
                }}
              >
                <X size={18} />
              </Button>
            </div>
            <JournalEntryForm
              onSave={handleSaveEntry}
              onCancel={() => {
                setShowEntryForm(false);
                setIsEditing(false);
                setCurrentEntry(null);
              }}
              initialEntry={currentEntry || undefined}
              isEditing={isEditing}
            />
          </div>
        ) : (
          <Tabs defaultValue="entries" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="entries">All Entries</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
            <TabsContent value="entries" className="space-y-4">
              {entries.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-gray-500 mb-2">No Entries Yet</h3>
                  <p className="text-gray-400 mb-6">Create your first journal entry to begin tracking your Ayurvedic journey</p>
                  <Button 
                    onClick={() => setShowEntryForm(true)} 
                    className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white"
                  >
                    <Plus size={16} className="mr-2" />
                    Create First Entry
                  </Button>
                </div>
              ) : (
                entries.map((entry) => (
                  <Card key={entry.id} className="transition-all hover:shadow-md">
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="font-serif text-lg text-ayurveda-deepPurple">{entry.title}</CardTitle>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon size={14} className="mr-1" />
                          {entry.date}
                        </div>
                      </div>
                      <CardDescription>Mood: {entry.mood}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        {expandedEntry === entry.id 
                          ? entry.content 
                          : `${entry.content.substring(0, 150)}${entry.content.length > 150 ? '...' : ''}`}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-ayurveda-lavender/20 text-ayurveda-deepPurple text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          className="text-ayurveda-terracotta hover:text-ayurveda-terracotta/90"
                          onClick={() => toggleEntryDetails(entry.id)}
                        >
                          {expandedEntry === entry.id ? "Show Less" : "Read More"}
                        </Button>
                        <Button 
                          variant="ghost" 
                          className="text-gray-500 hover:text-ayurveda-deepPurple"
                          onClick={() => handleEditEntry(entry)}
                        >
                          <Edit size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          className="text-gray-500 hover:text-red-500"
                          onClick={() => confirmDelete(entry.id)}
                        >
                          <Trash size={16} />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              )}
            </TabsContent>
            <TabsContent value="calendar">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-center text-lg text-gray-500">Calendar view will be implemented soon</p>
              </div>
            </TabsContent>
            <TabsContent value="insights">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-center text-lg text-gray-500">Insights based on your journal entries will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your journal entry.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button 
                variant="destructive" 
                onClick={handleDeleteEntry}
              >
                Delete Entry
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
