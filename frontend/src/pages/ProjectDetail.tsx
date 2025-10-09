import React, { useMemo, memo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { useProject } from '../hooks/useProject';
import type { ProjectDetail } from '../hooks/useProject';

// Image Viewer Component
const ImageViewer = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-white hover:text-[#00CFFF] transition-colors"
      aria-label="Close"
    >
      <X size={32} />
    </button>

    <button
      onClick={onPrev}
      disabled={currentIndex === 0}
      className="absolute left-4 p-2 text-white hover:text-[#00CFFF] disabled:opacity-30"
      aria-label="Previous image"
    >
      <ChevronLeft size={40} />
    </button>

    <div className="max-w-4xl max-h-[90vh] overflow-auto">
      <img
        src={images[currentIndex]}
        alt={`Screenshot ${currentIndex + 1}`}
        className="max-w-full max-h-[80vh] object-contain"
      />
    </div>

    <button
      onClick={onNext}
      disabled={currentIndex === images.length - 1}
      className="absolute right-4 p-2 text-white hover:text-[#00CFFF] disabled:opacity-30"
      aria-label="Next image"
    >
      <ChevronRight size={40} />
    </button>

    <div className="absolute bottom-4 text-white/80 text-sm">
      {currentIndex + 1} / {images.length}
    </div>
  </div>
);

// Project Header Component
const ProjectHeader = memo(
  ({
    title,
    description,
    demoUrl,
    githubUrl,
    slug,
  }: {
    title: string;
    description: string;
    demoUrl?: string;
    githubUrl?: string;
    slug: string;
  }) => (
    <div className="flex-1">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
      <p className="text-xl text-white/80 mb-6">{description}</p>
      <div className="flex flex-wrap gap-4 mt-8">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00CFFF] hover:bg-[#00B8E6] text-[#0A2540] font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
          >
            <ExternalLink className="mr-2" size={18} />
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
          >
            <Code className="mr-2" size={18} />
            View Code
          </a>
        )}
        <Link
          to={`/case-studies/${slug}`}
          className="text-white/80 hover:text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors duration-300 inline-flex items-center"
        >
          View Case Study
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  )
);

// Project Details Component
const ProjectDetails = memo(({ project }: { project: ProjectDetail }) => (
  <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
    <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>

    <div className="space-y-4">
      <div>
        <p className="text-sm text-white/60">Client</p>
        <p className="text-white">{project.client}</p>
      </div>

      <div>
        <p className="text-sm text-white/60">Category</p>
        <p className="text-white">{project.category}</p>
      </div>

      <div>
        <p className="text-sm text-white/60">Date</p>
        <p className="text-white">{project.date}</p>
      </div>

      <div>
        <p className="text-sm text-white/60 mb-2">Technologies</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-white/10 text-white/90 text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
));

// Project Features Component
const ProjectFeatures = memo(({ features }: { features: string[] }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-white mb-4">Project Features</h3>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-[#00CFFF] mr-2">•</span>
          <span className="text-white/80">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
));

// Project Technologies Component
const ProjectTechnologies = memo(({ technologies }: { technologies: string[] }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span key={index} className="bg-[#00CFFF]/10 text-[#00CFFF] text-sm px-3 py-1 rounded-full">
          {tech}
        </span>
      ))}
    </div>
  </div>
));

// Project Navigation Component
const ProjectNavigation = memo(({ slug }: { slug: string }) => (
  <div className="border-t border-white/10 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Portfolio
        </Link>
        <Link
          to={`/contact`}
          className="inline-flex items-center bg-[#00CFFF] hover:bg-[#00B8E6] text-[#0A2540] font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Start Your Project
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  </div>
));

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { project, loading, error } = useProject(slug);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const memoizedProject = useMemo(() => project, [project]);

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
  };

  const closeImageViewer = () => setViewerOpen(false);
  const goToNext = () =>
    setCurrentImageIndex(prev => (prev < (allImages?.length || 1) - 1 ? prev + 1 : prev));
  const goToPrev = () => setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : prev));

  const allImages = useMemo(
    () => (memoizedProject ? [memoizedProject.image, ...(memoizedProject.screenshots || [])] : []),
    [memoizedProject]
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !memoizedProject) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <p className="text-xl text-white/80 mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/portfolio"
          className="bg-[#00CFFF] hover:bg-[#00B8E6] text-[#0A2540] font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2540] to-[#030D18] text-white">
      {viewerOpen && (
        <ImageViewer
          images={allImages}
          currentIndex={currentImageIndex}
          onClose={closeImageViewer}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}

      {/* Header */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />

          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            {/* Project Details - Left Side */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {memoizedProject.title}
              </h1>
              <p className="text-xl text-white/80 mb-6">{memoizedProject.description}</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <ProjectHeader
                  title=""
                  description=""
                  demoUrl={memoizedProject.demoUrl}
                  githubUrl={memoizedProject.githubUrl}
                  slug={memoizedProject.slug}
                />
              </div>
            </div>

            {/* Project Image - Right Side */}
            <div className="w-full lg:w-1/2 xl:w-2/5">
              <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-[#00CFFF]/30 transition-all duration-300 group">
                <img
                  src={memoizedProject.image}
                  alt={memoizedProject.title}
                  className="w-full h-auto max-h-[60vh] object-contain cursor-zoom-in transition-transform duration-500 group-hover:scale-105"
                  onClick={() => openImageViewer(0)}
                />
              </div>
            </div>
          </div>

          {/* Project Info Section */}
          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Project Details */}
              <div className="lg:col-span-6">
                <ProjectDetails project={memoizedProject} />
              </div>
              
              {/* Right Column - Features */}
              <div className="lg:col-span-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <ProjectFeatures features={memoizedProject.features} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      {memoizedProject.screenshots && memoizedProject.screenshots.length > 0 && (
        <div className="mt-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Project Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memoizedProject.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-white/10 hover:border-[#00CFFF]/30 transition-all duration-300 group cursor-zoom-in"
                onClick={() => openImageViewer(index + 1)}
              >
                <img
                  src={screenshot}
                  alt={`${memoizedProject.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <ProjectNavigation slug={memoizedProject.slug} />
    </div>
  );
};

export default ProjectDetail;
