let clientX = 0,
  clientY = 0,
  windowsW = 0,
  windowsH = 0,
  dPositionY = 0,
  dPositionX = 0,
  clientRect = null,
  targetEl = null;

const DRAG_HANDLE = 'drag-handle';

const onMouseDown = (target, event) => {
  event.preventDefault();
  if (!event.target.classList.contains(DRAG_HANDLE)) {
    return;
  }

  targetEl = target; //target.parentElement;
  clientRect = target.getBoundingClientRect();

  clientX = event.clientX;
  clientY = event.clientY;
  dPositionX = clientX - clientRect.left;
  dPositionY = clientY - clientRect.top;

  // top/left를 사용해서 위치 값을 셋팅함 그외 기본값으로
  // targetEl.style.padding = '0px';
  targetEl.style.position = 'fixed';
  targetEl.style.top = clientRect.top + 'px';
  targetEl.style.right = 'auto';
  targetEl.style.bottom = 'auto';
  targetEl.style.left = clientRect.left + 'px';
  targetEl.style.transform = 'none';

  targetEl
    .getElementsByClassName('grab')
    .forEach((el) => el.classList.add('grabbing'));

  document.addEventListener('mousemove', onMouseMoveDialog);
  document.addEventListener('mouseup', onMouseUpDialog);
};

const onMouseMoveDialog = (event) => {
  // return;
  event.preventDefault();
  clientX = event.clientX;
  clientY = event.clientY;
  windowsW = window.innerWidth;
  windowsH = window.innerHeight;

  if (clientX < 0) {
    clientX = 0;
  } else if (clientX >= windowsW) {
    clientX = windowsW;
  }
  if (clientY < 0) {
    clientY = 0;
  } else if (clientY >= windowsH) {
    clientY = windowsH;
  }
  targetEl.style.top = clientY - dPositionY + 'px';
  targetEl.style.left = clientX - dPositionX + 'px';
};

const onMouseUpDialog = () => {
  targetEl
    .getElementsByClassName('grab')
    .forEach((el) => el.classList.remove('grabbing'));
  document.removeEventListener('mousemove', onMouseMoveDialog);
  document.removeEventListener('mouseup', onMouseUpDialog);

  clientX = 0;
  clientY = 0;
  windowsW = 0;
  windowsH = 0;
  dPositionY = 0;
  dPositionX = 0;
  clientRect = null;
  targetEl = null;
};

function _bind(dragEl) {
  dragEl.addEventListener('mousedown', onMouseDown.bind(null, dragEl));
  dragEl
    .getElementsByClassName(DRAG_HANDLE)
    .forEach((el) => el.classList.add('grab'));
}

function _unbind(dragEl) {
  dragEl.removeEventListener('mousedown', onMouseDown.bind(null, dragEl));
}

const drag = {
  bind: _bind,
  unbind: _unbind,
};

export default drag;
