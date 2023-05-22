$(document).ready(function() {
    // jQuery code for image preview functionality
    const $images = $('.gallery .image img');
    const $fullscreenPreview = $('.fullscreen-preview');
    const $previewImage = $fullscreenPreview.find('.preview-image');
    const $nextIcon = $fullscreenPreview.find('.next-icon');
    const $prevIcon = $fullscreenPreview.find('.prev-icon');
  
    let currentImageIndex = 0;
  
    function showFullscreenPreview() {
      const currentImage = $images.eq(currentImageIndex);
  
      $previewImage.attr('src', currentImage.attr('src'));
      $previewImage.attr('alt', currentImage.attr('alt'));
      $fullscreenPreview.show();
    }
  
    function closeFullscreenPreview() {
      $fullscreenPreview.hide();
    }
  
    function showNextImage() {
      currentImageIndex = (currentImageIndex + 1) % $images.length;
      showFullscreenPreview();
    }
  
    function showPreviousImage() {
      currentImageIndex = (currentImageIndex - 1 + $images.length) % $images.length;
      showFullscreenPreview();
    }
  
    // Add click event listener to each image
    $images.on('click', function() {
      currentImageIndex = $images.index(this);
      showFullscreenPreview();
    });
  
    // Add click event listener to close fullscreen preview
    $fullscreenPreview.on('click', closeFullscreenPreview);
  
    // Add click event listener to next and previous icons
    $nextIcon.on('click', function(event) {
      event.stopPropagation();
      showNextImage();
    });
  
    $prevIcon.on('click', function(event) {
      event.stopPropagation();
      showPreviousImage();
    });
  
     // Hide fullscreen preview initially
  $fullscreenPreview.hide();
    // Add next and previous icons
    $(document).on('keydown', function(event) {
      if (event.key === 'ArrowRight') {
        showNextImage();
      } else if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }
    });
  });
