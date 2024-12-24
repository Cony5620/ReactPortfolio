import { useState } from "react"; // Import useState for managing modal state
import { PROJECTS } from '../constants'; // Import PROJECTS from constants

const Project = () => {
  const [isImageOpen, setIsImageOpen] = useState(false); // State for managing modal visibility
  const [selectedImage, setSelectedImage] = useState(""); // State to store the selected image

  // Function to open the image modal
  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsImageOpen(true);
  };

  // Function to close the image modal
  const closeImageModal = () => {
    setIsImageOpen(false);
  };

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className='mb-6 rounded cursor-pointer'
                onClick={() => openImageModal(project.image)} // Open modal on image click
              />
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 rounded bg-neutral-900 text-sm px-2 py-1 text-purple-900'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeImageModal} // Close modal on background click
        >
          <img
            src={selectedImage}
            alt="Selected project"
            className="max-w-full max-h-full p-4 rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Project;
